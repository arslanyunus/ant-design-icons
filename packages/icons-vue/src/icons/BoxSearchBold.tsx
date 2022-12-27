// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxSearchBoldSvg from '@ant-design/icons-svg/lib/asn/BoxSearchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxSearchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxSearchBold: BoxSearchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxSearchBoldSvg}></AntdIcon>;
};

BoxSearchBold.displayName = 'BoxSearchBold';
BoxSearchBold.inheritAttrs = false;
export default BoxSearchBold;