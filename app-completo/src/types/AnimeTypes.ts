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
