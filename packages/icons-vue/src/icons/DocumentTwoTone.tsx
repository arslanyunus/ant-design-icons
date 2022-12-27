// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentTwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentTwoTone: DocumentTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentTwoToneSvg}></AntdIcon>;
};

DocumentTwoTone.displayName = 'DocumentTwoTone';
DocumentTwoTone.inheritAttrs = false;
export default DocumentTwoTone;