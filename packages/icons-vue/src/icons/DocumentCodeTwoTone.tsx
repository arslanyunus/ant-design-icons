// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCodeTwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentCodeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCodeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCodeTwoTone: DocumentCodeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCodeTwoToneSvg}></AntdIcon>;
};

DocumentCodeTwoTone.displayName = 'DocumentCodeTwoTone';
DocumentCodeTwoTone.inheritAttrs = false;
export default DocumentCodeTwoTone;