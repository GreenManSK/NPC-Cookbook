import React from 'react';
import { useHistoryManagerContext } from '../contexts/HistoryManagerProvider';
import { CharacterList } from './CharacterList';
import { useCharacterContext } from '../contexts/CharacterProvider';
import './HistoryList.css';
import { HiChevronDoubleLeft, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const PAGE_SIZE = 50;

export const HistoryList = React.memo(() => {
    const {history} = useHistoryManagerContext();
    const {setCurrent} = useCharacterContext();
    const [page, setPage] = React.useState(1);

    const pageCount = Math.ceil(history.length / PAGE_SIZE);
    const characters = React.useMemo(() => [...history].reverse().slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE), [history, page])

    const setFirstPage = React.useCallback(() => setPage(1), []);
    const setPrevPage = React.useCallback(() => setPage(page - 1), [page]);
    const setNextPage = React.useCallback(() => setPage(page + 1), [page]);

    return <>
        <CharacterList characters={characters} clickCallback={setCurrent}/>
        <div className="history-pagination">
            <button disabled={page === 1} onClick={setFirstPage} className="form-button"><HiChevronDoubleLeft/></button>
            <button disabled={page === 1} onClick={setPrevPage} className="form-button"><HiChevronLeft/></button>
            <span>{page} / {pageCount}</span>
            <button disabled={page === pageCount} onClick={setNextPage} className="form-button"><HiChevronRight/>
            </button>
        </div>
    </>;
});
