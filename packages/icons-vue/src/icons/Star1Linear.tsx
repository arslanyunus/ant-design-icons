// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Star1LinearSvg from '@ant-design/icons-svg/lib/asn/Star1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Star1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Star1Linear: Star1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Star1LinearSvg}></AntdIcon>;
};

Star1Linear.displayName = 'Star1Linear';
Star1Linear.inheritAttrs = false;
export default Star1Linear;