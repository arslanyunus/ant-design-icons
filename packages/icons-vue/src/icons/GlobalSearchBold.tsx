// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalSearchBoldSvg from '@ant-design/icons-svg/lib/asn/GlobalSearchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalSearchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalSearchBold: GlobalSearchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalSearchBoldSvg}></AntdIcon>;
};

GlobalSearchBold.displayName = 'GlobalSearchBold';
GlobalSearchBold.inheritAttrs = false;
export default GlobalSearchBold;