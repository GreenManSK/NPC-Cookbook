import React from 'react';
import { useHistoryManagerContext } from '../contexts/HistoryManagerProvider';
import { CharacterList } from './CharacterList';
import { useCharacterContext } from '../contexts/CharacterProvider';

const PAGE_SIZE = 10;

export const HistoryList = React.memo(() => {
    const {history} = useHistoryManagerContext();
    const {setCurrent} = useCharacterContext();
    const [page, setPage] = React.useState(1);

    const pageCount = Math.ceil(history.length / PAGE_SIZE);
    const characters = React.useMemo(() => history.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE), [history, page])

    const setFirstPage = React.useCallback(() => setPage(1), []);
    const setPrevPage = React.useCallback(() => setPage(page - 1), [page]);
    const setNextPage = React.useCallback(() => setPage(page + 1), [page]);

    return <>
        <h1>History</h1>
        <CharacterList characters={characters} clickCallback={setCurrent}/>
        <button disabled={page === 1} onClick={setFirstPage}>First</button>
        <button disabled={page === 1} onClick={setPrevPage}>Prev</button>
        {page} / {pageCount}
        <button disabled={page === pageCount} onClick={setNextPage}>Next</button>
    </>;
});
