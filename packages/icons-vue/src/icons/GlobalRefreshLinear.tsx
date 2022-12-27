// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalRefreshLinearSvg from '@ant-design/icons-svg/lib/asn/GlobalRefreshLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalRefreshLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalRefreshLinear: GlobalRefreshLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalRefreshLinearSvg}></AntdIcon>;
};

GlobalRefreshLinear.displayName = 'GlobalRefreshLinear';
GlobalRefreshLinear.inheritAttrs = false;
export default GlobalRefreshLinear;