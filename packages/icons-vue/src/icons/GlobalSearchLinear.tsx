// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalSearchLinearSvg from '@ant-design/icons-svg/lib/asn/GlobalSearchLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalSearchLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalSearchLinear: GlobalSearchLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalSearchLinearSvg}></AntdIcon>;
};

GlobalSearchLinear.displayName = 'GlobalSearchLinear';
GlobalSearchLinear.inheritAttrs = false;
export default GlobalSearchLinear;