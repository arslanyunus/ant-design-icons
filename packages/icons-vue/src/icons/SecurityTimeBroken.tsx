// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityTimeBrokenSvg from '@ant-design/icons-svg/lib/asn/SecurityTimeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityTimeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityTimeBroken: SecurityTimeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityTimeBrokenSvg}></AntdIcon>;
};

SecurityTimeBroken.displayName = 'SecurityTimeBroken';
SecurityTimeBroken.inheritAttrs = false;
export default SecurityTimeBroken;