// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartAddBoldSvg from '@ant-design/icons-svg/lib/asn/HeartAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartAddBold: HeartAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartAddBoldSvg}></AntdIcon>;
};

HeartAddBold.displayName = 'HeartAddBold';
HeartAddBold.inheritAttrs = false;
export default HeartAddBold;