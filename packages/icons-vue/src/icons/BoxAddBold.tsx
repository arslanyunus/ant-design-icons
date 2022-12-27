// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxAddBoldSvg from '@ant-design/icons-svg/lib/asn/BoxAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxAddBold: BoxAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxAddBoldSvg}></AntdIcon>;
};

BoxAddBold.displayName = 'BoxAddBold';
BoxAddBold.inheritAttrs = false;
export default BoxAddBold;