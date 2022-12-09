import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const MyPagination = ({ countPage, setPageNumber }) => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPageNumber(value)
        setPage(value);
        window.scroll({ top: 0, behavior: "smooth" })
    };

    return (
        <Stack spacing={2}>
            <Pagination count={countPage} page={page} onChange={handleChange} shape="rounded" />
        </Stack>
    );
}