// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentForwardBoldSvg from '@ant-design/icons-svg/lib/asn/DocumentForwardBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentForwardBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentForwardBold: DocumentForwardBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentForwardBoldSvg}></AntdIcon>;
};

DocumentForwardBold.displayName = 'DocumentForwardBold';
DocumentForwardBold.inheritAttrs = false;
export default DocumentForwardBold;