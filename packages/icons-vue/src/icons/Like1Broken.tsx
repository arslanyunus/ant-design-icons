// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Like1BrokenSvg from '@ant-design/icons-svg/lib/asn/Like1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Like1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Like1Broken: Like1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Like1BrokenSvg}></AntdIcon>;
};

Like1Broken.displayName = 'Like1Broken';
Like1Broken.inheritAttrs = false;
export default Like1Broken;