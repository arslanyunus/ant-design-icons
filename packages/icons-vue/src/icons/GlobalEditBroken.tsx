// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalEditBrokenSvg from '@ant-design/icons-svg/lib/asn/GlobalEditBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalEditBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalEditBroken: GlobalEditBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalEditBrokenSvg}></AntdIcon>;
};

GlobalEditBroken.displayName = 'GlobalEditBroken';
GlobalEditBroken.inheritAttrs = false;
export default GlobalEditBroken;