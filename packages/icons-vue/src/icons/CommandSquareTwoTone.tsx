// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CommandSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/CommandSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CommandSquareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CommandSquareTwoTone: CommandSquareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CommandSquareTwoToneSvg}></AntdIcon>;
};

CommandSquareTwoTone.displayName = 'CommandSquareTwoTone';
CommandSquareTwoTone.inheritAttrs = false;
export default CommandSquareTwoTone;