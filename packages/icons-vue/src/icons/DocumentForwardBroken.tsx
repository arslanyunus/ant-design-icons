// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentForwardBrokenSvg from '@ant-design/icons-svg/lib/asn/DocumentForwardBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentForwardBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentForwardBroken: DocumentForwardBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentForwardBrokenSvg}></AntdIcon>;
};

DocumentForwardBroken.displayName = 'DocumentForwardBroken';
DocumentForwardBroken.inheritAttrs = false;
export default DocumentForwardBroken;