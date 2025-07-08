export interface Anime {
  name: string;
  rating: string;
  description: string;
}

export interface Props {
  visible: boolean;
  onClose: () => void;
  onSave: (anime: Anime) => void;
}


export interface FavoriteAnimeCardProps {
  name: string;
  rating: string;
  description: string;
  onPress: (value: string) => void;
}