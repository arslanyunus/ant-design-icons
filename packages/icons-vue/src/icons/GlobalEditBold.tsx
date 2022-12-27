// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalEditBoldSvg from '@ant-design/icons-svg/lib/asn/GlobalEditBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalEditBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalEditBold: GlobalEditBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalEditBoldSvg}></AntdIcon>;
};

GlobalEditBold.displayName = 'GlobalEditBold';
GlobalEditBold.inheritAttrs = false;
export default GlobalEditBold;