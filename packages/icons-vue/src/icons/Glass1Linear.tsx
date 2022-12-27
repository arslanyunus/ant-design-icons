// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Glass1LinearSvg from '@ant-design/icons-svg/lib/asn/Glass1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Glass1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Glass1Linear: Glass1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Glass1LinearSvg}></AntdIcon>;
};

Glass1Linear.displayName = 'Glass1Linear';
Glass1Linear.inheritAttrs = false;
export default Glass1Linear;