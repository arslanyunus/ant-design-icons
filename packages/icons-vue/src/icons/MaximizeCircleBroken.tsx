// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaximizeCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/MaximizeCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaximizeCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaximizeCircleBroken: MaximizeCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaximizeCircleBrokenSvg}></AntdIcon>;
};

MaximizeCircleBroken.displayName = 'MaximizeCircleBroken';
MaximizeCircleBroken.inheritAttrs = false;
export default MaximizeCircleBroken;