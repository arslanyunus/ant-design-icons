// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Arrow2LinearSvg from '@ant-design/icons-svg/lib/asn/Arrow2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Arrow2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Arrow2Linear: Arrow2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Arrow2LinearSvg}></AntdIcon>;
};

Arrow2Linear.displayName = 'Arrow2Linear';
Arrow2Linear.inheritAttrs = false;
export default Arrow2Linear;