// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import More2LinearSvg from '@ant-design/icons-svg/lib/asn/More2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface More2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const More2Linear: More2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={More2LinearSvg}></AntdIcon>;
};

More2Linear.displayName = 'More2Linear';
More2Linear.inheritAttrs = false;
export default More2Linear;