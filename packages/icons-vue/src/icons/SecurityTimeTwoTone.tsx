// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityTimeTwoToneSvg from '@ant-design/icons-svg/lib/asn/SecurityTimeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityTimeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityTimeTwoTone: SecurityTimeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityTimeTwoToneSvg}></AntdIcon>;
};

SecurityTimeTwoTone.displayName = 'SecurityTimeTwoTone';
SecurityTimeTwoTone.inheritAttrs = false;
export default SecurityTimeTwoTone;