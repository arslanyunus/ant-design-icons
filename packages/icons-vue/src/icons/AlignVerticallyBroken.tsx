// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignVerticallyBrokenSvg from '@ant-design/icons-svg/lib/asn/AlignVerticallyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignVerticallyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignVerticallyBroken: AlignVerticallyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignVerticallyBrokenSvg}></AntdIcon>;
};

AlignVerticallyBroken.displayName = 'AlignVerticallyBroken';
AlignVerticallyBroken.inheritAttrs = false;
export default AlignVerticallyBroken;