// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxReceiveLinearSvg from '@ant-design/icons-svg/lib/asn/DirectboxReceiveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxReceiveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxReceiveLinear: DirectboxReceiveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxReceiveLinearSvg}></AntdIcon>;
};

DirectboxReceiveLinear.displayName = 'DirectboxReceiveLinear';
DirectboxReceiveLinear.inheritAttrs = false;
export default DirectboxReceiveLinear;