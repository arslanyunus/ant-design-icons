// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NextBoldSvg from '@ant-design/icons-svg/lib/asn/NextBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NextBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NextBold: NextBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NextBoldSvg}></AntdIcon>;
};

NextBold.displayName = 'NextBold';
NextBold.inheritAttrs = false;
export default NextBold;