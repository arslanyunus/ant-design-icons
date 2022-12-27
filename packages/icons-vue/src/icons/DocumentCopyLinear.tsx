// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCopyLinearSvg from '@ant-design/icons-svg/lib/asn/DocumentCopyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCopyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCopyLinear: DocumentCopyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCopyLinearSvg}></AntdIcon>;
};

DocumentCopyLinear.displayName = 'DocumentCopyLinear';
DocumentCopyLinear.inheritAttrs = false;
export default DocumentCopyLinear;