// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentFavoriteTwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentFavoriteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentFavoriteTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentFavoriteTwoTone: DocumentFavoriteTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentFavoriteTwoToneSvg}></AntdIcon>;
};

DocumentFavoriteTwoTone.displayName = 'DocumentFavoriteTwoTone';
DocumentFavoriteTwoTone.inheritAttrs = false;
export default DocumentFavoriteTwoTone;