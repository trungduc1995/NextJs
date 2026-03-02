import ImageItem from '@/components/shared/ImageItem';

type Props = {
    data?: any[];
    className?: string;
};

export default function BannerList({ data = [], className = '' }: Props) {
    if (!data.length) return null;

    return (
        <div className={className}>
            {data.map((item) => (
                <ImageItem key={item.id} item={item} />
            ))}
        </div>
    );
}
