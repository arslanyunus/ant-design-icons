// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCodeLinearSvg from '@ant-design/icons-svg/lib/asn/DocumentCodeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCodeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCodeLinear: DocumentCodeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCodeLinearSvg}></AntdIcon>;
};

DocumentCodeLinear.displayName = 'DocumentCodeLinear';
DocumentCodeLinear.inheritAttrs = false;
export default DocumentCodeLinear;