// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalSearchBrokenSvg from '@ant-design/icons-svg/lib/asn/GlobalSearchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalSearchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalSearchBroken: GlobalSearchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalSearchBrokenSvg}></AntdIcon>;
};

GlobalSearchBroken.displayName = 'GlobalSearchBroken';
GlobalSearchBroken.inheritAttrs = false;
export default GlobalSearchBroken;