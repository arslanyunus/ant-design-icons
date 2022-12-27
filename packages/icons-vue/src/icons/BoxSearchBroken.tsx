// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxSearchBrokenSvg from '@ant-design/icons-svg/lib/asn/BoxSearchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxSearchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxSearchBroken: BoxSearchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxSearchBrokenSvg}></AntdIcon>;
};

BoxSearchBroken.displayName = 'BoxSearchBroken';
BoxSearchBroken.inheritAttrs = false;
export default BoxSearchBroken;