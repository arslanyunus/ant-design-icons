// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SortBoldSvg from '@ant-design/icons-svg/lib/asn/SortBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SortBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SortBold: SortBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SortBoldSvg}></AntdIcon>;
};

SortBold.displayName = 'SortBold';
SortBold.inheritAttrs = false;
export default SortBold;