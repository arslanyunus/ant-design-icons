// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentLikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentLikeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentLikeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentLikeTwoTone: DocumentLikeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentLikeTwoToneSvg}></AntdIcon>;
};

DocumentLikeTwoTone.displayName = 'DocumentLikeTwoTone';
DocumentLikeTwoTone.inheritAttrs = false;
export default DocumentLikeTwoTone;