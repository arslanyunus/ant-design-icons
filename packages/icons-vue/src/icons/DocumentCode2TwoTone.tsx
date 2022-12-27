// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCode2TwoToneSvg from '@ant-design/icons-svg/lib/asn/DocumentCode2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCode2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCode2TwoTone: DocumentCode2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCode2TwoToneSvg}></AntdIcon>;
};

DocumentCode2TwoTone.displayName = 'DocumentCode2TwoTone';
DocumentCode2TwoTone.inheritAttrs = false;
export default DocumentCode2TwoTone;