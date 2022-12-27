// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CommandSquareBoldSvg from '@ant-design/icons-svg/lib/asn/CommandSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CommandSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CommandSquareBold: CommandSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommandSquareBoldSvg}></AntdIcon>;
};

CommandSquareBold.displayName = 'CommandSquareBold';
CommandSquareBold.inheritAttrs = false;
export default CommandSquareBold;