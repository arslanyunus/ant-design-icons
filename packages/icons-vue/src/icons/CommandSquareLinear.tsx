// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CommandSquareLinearSvg from '@ant-design/icons-svg/lib/asn/CommandSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CommandSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CommandSquareLinear: CommandSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommandSquareLinearSvg}></AntdIcon>;
};

CommandSquareLinear.displayName = 'CommandSquareLinear';
CommandSquareLinear.inheritAttrs = false;
export default CommandSquareLinear;