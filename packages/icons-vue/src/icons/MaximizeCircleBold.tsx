// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MaximizeCircleBoldSvg from '@ant-design/icons-svg/lib/asn/MaximizeCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MaximizeCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MaximizeCircleBold: MaximizeCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MaximizeCircleBoldSvg}></AntdIcon>;
};

MaximizeCircleBold.displayName = 'MaximizeCircleBold';
MaximizeCircleBold.inheritAttrs = false;
export default MaximizeCircleBold;