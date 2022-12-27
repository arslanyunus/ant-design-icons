// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BookSavedTwoToneSvg from '@ant-design/icons-svg/lib/asn/BookSavedTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BookSavedTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BookSavedTwoTone: BookSavedTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookSavedTwoToneSvg}></AntdIcon>;
};

BookSavedTwoTone.displayName = 'BookSavedTwoTone';
BookSavedTwoTone.inheritAttrs = false;
export default BookSavedTwoTone;