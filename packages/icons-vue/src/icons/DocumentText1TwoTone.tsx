// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentText1TwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentText1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentText1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentText1TwoTone: DocumentText1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentText1TwoToneSvg}></AntdIcon>;
};

DocumentText1TwoTone.displayName = 'DocumentText1TwoTone';
DocumentText1TwoTone.inheritAttrs = false;
export default DocumentText1TwoTone;