// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartSearchBoldSvg from '@ant-design/icons-svg/lib/asn/HeartSearchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartSearchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartSearchBold: HeartSearchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartSearchBoldSvg}></AntdIcon>;
};

HeartSearchBold.displayName = 'HeartSearchBold';
HeartSearchBold.inheritAttrs = false;
export default HeartSearchBold;