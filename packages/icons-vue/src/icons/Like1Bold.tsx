// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Like1BoldSvg from '@ant-design/icons-svg/lib/asn/Like1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Like1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Like1Bold: Like1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Like1BoldSvg}></AntdIcon>;
};

Like1Bold.displayName = 'Like1Bold';
Like1Bold.inheritAttrs = false;
export default Like1Bold;