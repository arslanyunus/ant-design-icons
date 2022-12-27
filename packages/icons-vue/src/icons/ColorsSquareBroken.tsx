// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorsSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/ColorsSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorsSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorsSquareBroken: ColorsSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorsSquareBrokenSvg}></AntdIcon>;
};

ColorsSquareBroken.displayName = 'ColorsSquareBroken';
ColorsSquareBroken.inheritAttrs = false;
export default ColorsSquareBroken;