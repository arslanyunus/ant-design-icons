// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxAddBrokenSvg from '@ant-design/icons-svg/lib/asn/BoxAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxAddBroken: BoxAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxAddBrokenSvg}></AntdIcon>;
};

BoxAddBroken.displayName = 'BoxAddBroken';
BoxAddBroken.inheritAttrs = false;
export default BoxAddBroken;