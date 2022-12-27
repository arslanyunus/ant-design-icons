// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Like1LinearSvg from '@ant-design/icons-svg/lib/asn/Like1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Like1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Like1Linear: Like1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Like1LinearSvg}></AntdIcon>;
};

Like1Linear.displayName = 'Like1Linear';
Like1Linear.inheritAttrs = false;
export default Like1Linear;