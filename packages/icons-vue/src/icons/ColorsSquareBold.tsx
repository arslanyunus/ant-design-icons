// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorsSquareBoldSvg from '@ant-design/icons-svg/lib/asn/ColorsSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorsSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorsSquareBold: ColorsSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorsSquareBoldSvg}></AntdIcon>;
};

ColorsSquareBold.displayName = 'ColorsSquareBold';
ColorsSquareBold.inheritAttrs = false;
export default ColorsSquareBold;