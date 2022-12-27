// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InformationLinearSvg from '@ant-design/icons-svg/lib/asn/InformationLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InformationLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InformationLinear: InformationLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InformationLinearSvg}></AntdIcon>;
};

InformationLinear.displayName = 'InformationLinear';
InformationLinear.inheritAttrs = false;
export default InformationLinear;