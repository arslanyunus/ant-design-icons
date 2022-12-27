// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorsSquare1LinearSvg from '@ant-design/icons-svg/lib/asn/ColorsSquare1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorsSquare1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorsSquare1Linear: ColorsSquare1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorsSquare1LinearSvg}></AntdIcon>;
};

ColorsSquare1Linear.displayName = 'ColorsSquare1Linear';
ColorsSquare1Linear.inheritAttrs = false;
export default ColorsSquare1Linear;