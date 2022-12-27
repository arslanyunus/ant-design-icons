// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SortTwoToneSvg from '@ant-design/icons-svg/lib/asn/SortTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SortTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SortTwoTone: SortTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SortTwoToneSvg}></AntdIcon>;
};

SortTwoTone.displayName = 'SortTwoTone';
SortTwoTone.inheritAttrs = false;
export default SortTwoTone;