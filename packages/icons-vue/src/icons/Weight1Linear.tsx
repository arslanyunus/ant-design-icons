// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Weight1LinearSvg from '@ant-design/icons-svg/lib/asn/Weight1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Weight1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Weight1Linear: Weight1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Weight1LinearSvg}></AntdIcon>;
};

Weight1Linear.displayName = 'Weight1Linear';
Weight1Linear.inheritAttrs = false;
export default Weight1Linear;