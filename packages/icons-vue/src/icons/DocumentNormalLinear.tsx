// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentNormalLinearSvg from '@ant-design/icons-svg/lib/asn/DocumentNormalLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentNormalLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentNormalLinear: DocumentNormalLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentNormalLinearSvg}></AntdIcon>;
};

DocumentNormalLinear.displayName = 'DocumentNormalLinear';
DocumentNormalLinear.inheritAttrs = false;
export default DocumentNormalLinear;